import { api } from "@/lib/axios";

export interface ApproverOrderParams {
  orderId: string;
}

export async function approverOrder({ orderId }: ApproverOrderParams) {
  await api.patch(`/orders/${orderId}/approve`);
}
