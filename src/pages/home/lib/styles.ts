import styled from 'styled-components'

export const HomePageContainer = styled.div`
  min-height: 100vh;
  padding: 52px 0 0 0;

  @media screen and (max-width: 768px) {
    padding: 103px 0 0 0;
  }
`

export const HeadingContainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row-reverse;
  background: var(--c-layer-2);
  padding: 10px 15px;
  z-index: 2;

  > h1 {
    margin: 0;
    font-size: var(--f-4);
    text-align: right;
    color: var(--c-layer-2-text-2);
    font-family: var(--f-vazir-3);
  }

  > div {
    flex: 1;
    display: flex;

    > .selectComponent {
    }

    > .ant-input {
      width: 150px;
      margin: 0 0 0 10px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    > h1 {
      margin: 0 0 15px 0;
    }

    > div {
      width: 100%;
      margin: 0 0 10px 0;

      > .selectComponent {
        flex: 1;
      }

      > .ant-input {
        flex: 1;
      }
    }
  }
`

export const TransactionsContainer = styled.div`
  width: 100%;
  height: auto;

  .dividersComponent {
    width: 100%;

    > .header {
      background-color: var(--c-layer-2);
      padding: 10px 7px;
      text-align: right;
      font-family: var(--f-vazir-3);
      font-size: var(--f-1);
      box-shadow: 0 3px 2px 0 #cbcbcb30;
    }

    > .body {
      padding: 10px 0;
    }
  }

  @media screen and (max-width: 768px) {
    .dividersComponent {
      > .header {
        font-size: var(--f-0);
      }

      > .body {
      }
    }
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  text-align: right;
  direction: rtl;
  font-family: var(--f-vazir-3);
  border-bottom: 1px solid var(--c-layer-2-border);

  &:last-child {
    border: none;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    > span {
      font-family: var(--f-vazir-3);

      &:nth-child(2) {
        font-size: var(--f-4);
        margin: 5px 0 0 0;
        color: #30c530;
      }
    }

    > ul {
      padding: 0 10px 0 0;
      margin: 10px 0 0 0;
      list-style: none;

      > li {
      }
    }
  }

  > p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #30c530;
    font-family: var(--f-vazir-5);
    font-size: var(--f-2);
    direction: ltr;
  }

  &.negative {
    > p {
      color: red;
    }

    > div {
      > span {
        &:nth-child(2) {
          color: red;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      > span {
        font-size: var(--f-1);

        &:nth-child(2) {
          font-size: var(--f-2);
        }
      }

      > ul {
        > li {
          font-size: var(--f-0);
        }
      }
    }

    > p {
      font-size: var(--f-1);
      flex: 1;
      margin: 6px 10px 0 0;
    }
  }
`
