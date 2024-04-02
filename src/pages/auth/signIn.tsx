import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

const singInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof singInForm>;

export function SingIn() {
  const { register, handleSubmit } = useForm<SignInForm>();

  async function handleSighIn(data: SignInForm) {
    try {
      toast.success("Enviamos um link de autentificação para seu email.", {
        action: {
          label: "Reenviar",
          onClick: () => handleSighIn(data),
        },
      });
    } catch {
      toast.error("Credenciais invalidas");
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSighIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <Button className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
