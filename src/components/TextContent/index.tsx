import Heading from "../Heading";
import * as S from "./styles";
import React from "react";

export type TextContentProps = {
  title?: string;
  content: string;
};

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Wrapper>
  );
};

export default TextContent;
