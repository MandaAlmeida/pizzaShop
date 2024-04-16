import { getManagedRestaurant } from "@/api/getManagedRestaurant";
import { getProfile } from "@/api/getProfile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Dialog } from "./ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { StoreProfileDialog } from "./storeProfileDialog";
import { useNavigate } from "react-router-dom";
import { signOut } from "@/api/signOut";

export function AccountMenu() {
  const navigation = useNavigate();

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: Infinity,
  });
  const { data: restaurant, isLoading: isLoadingRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  });

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigation("/sign-in", { replace: true });
    },
  });

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              restaurant?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-40" />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem className="gap-2">
              <Building className="h-4 w-4" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            asChild
            className="gap-2 text-rose-500 dark:text-rose-400"
            disabled={isSigningOut}
          >
            <button className="w-full" onClick={() => signOutFn()}>
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  );
}
