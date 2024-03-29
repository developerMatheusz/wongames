import { Container } from "../components/Container";
import Empty from "../components/Empty";
import Base from "../templates/Base";
import React from "react";

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not found"
          description="Ops... this page does not exists. Go back to the store and enjoy our offers."
          hasLink
        />
      </Container>
    </Base>
  );
}
