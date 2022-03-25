import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { api } from "../../services/api";
import { getStripeJS } from "../../services/stripe-js";

import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = ({
  priceId,
}) => {
  const { data } = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!data) {
      signIn("github");
      return;
    }

    if (data.activeSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("subscribe", { priceId });

      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
};
