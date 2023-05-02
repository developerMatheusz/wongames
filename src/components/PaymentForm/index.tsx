import { ErrorOutline, ShoppingCart } from "styled-icons/material-outlined";
import Button from "../Button";
import Heading from "../Heading";
import * as S from "./styles";
import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";

const PaymentForm = () => {
  const [error, setError] = useState<string | null>();
  const [disabled, setDisabled] = useState(true);

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom color="black" size="small">
          Payment
        </Heading>
        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: {
                fontSize: "16px"
              }
            }
          }}
          onChange={handleChange}
        />
        {error && (
          <S.Error>
            <ErrorOutline size={20} /> {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={disabled || !!error}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};

export default PaymentForm;
