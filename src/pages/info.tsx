import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

// CSS 정의 및 글로벌 스타일 지정 방법
const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`

// Tagged Template Literal 방식을 통해 정의한 css 적용 방법
const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

// Tagged Template Literal 방식을 통한 Styled Component 생성 방법
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

// 객체를 통한 Styled Component 생성 방법
const Text2 = styled('div')<{ disable: boolean }>(({ disable }) => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`