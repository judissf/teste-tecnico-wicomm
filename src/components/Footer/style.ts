import styled from 'styled-components'

export const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 588px;
  width: 1280px;
  margin: auto;
  background-color: var(--black-1);

  .content-footer {
    display: flex;
    width: 100%;
    height: 500px;
    border-bottom: 1px solid var(--dark-3);

    .navigation {
      display: flex;
      width: 927px;
      height: 100%;
      padding-left: 56px;
      justify-content: space-between;

      .logo-network {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 245px;
        padding-top: 40px;

        figure {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 245px;
          height: 72px;
          margin-bottom: 32px;

          img {
            width: 213.37px;
            height: 40.83px;
          }
        }

        #follow-us {
          color: white;
          font-size: 14px;
          font-family: var(--font-barlow);
          font-weight: 400;
          line-height: 17px;
          margin-bottom: 16px;
          text-align: center;
        }

        .network {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 200px;
          height: 24px;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            width: 24px;
            height: 24px;
            cursor: pointer;
            border: none;
            border-radius: 50%;
            transition: 0.2s;

            svg {
              font-size: 16px;
              color: black;
            }

            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }

      .links-payments {
        display: flex;
        flex-direction: column;
        padding-top: 64px;
        margin-right: 40px;
        width: 545px;
        height: 100%;

        .links {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          height: 215px;
          width: 100%;
          margin-bottom: 45px;

          p {
            font-family: var(--font-barlow);
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
            color: white;
            margin-bottom: 20px;
          }

          a {
            color: var(--gray-1);
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            text-decoration: none;
            font-family: var(--font-barlow);
            width: 100%;
            transition: 0.2s;

            &:hover {
              color: white;
            }
          }

          li {
            width: 100%;
          }

          .black-skull-usa {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 141px;
            height: 211px;

            nav {
              height: 100%;

              ul {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              }
            }
          }

          .institucional {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 160px;
            height: 149px;

            nav {
              height: 100%;

              ul {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
              }
            }
          }

          .afiliados {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 156px;
            height: 214px;

            nav {
              height: 100%;

              ul {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                width: 156px;
              }
            }
          }
        }

        .payments-security {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 378px;
          height: 99px;

          p {
            color: white;
            font-family: var(--font-barlow);
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
          }

          .payments {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
            width: 202px;
            height: 99px;

            .flags {
              display: flex;
              width: 100%;
              align-items: flex-start;
              gap: 8px;
              flex-wrap: wrap;
              height: 56px;

              img {
                width: 34px;
                height: 24px;
              }
            }
          }

          .security {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 128px;
            height: 95px;

            .security-seals {
              display: flex;
              justify-content: space-between;
              width: 100%;

              #vtex_pci {
                width: 80px;
                height: 48px;
              }

              #ebit {
                width: 38px;
                height: 52px;
              }
            }
          }
        }
      }
    }

    .newsletter {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 353px;
      height: 100%;
      border-left: 1px solid var(--dark-3);
      padding-top: 64px;

      h6 {
        width: 140px;
        height: 76px;
        color: white;
        font-family: var(--font-roboto);
        font-weight: 700;
        font-size: 32px;
        font-style: italic;
        line-height: 38px;
        text-align: center;
        margin-bottom: 16px;
        cursor: default;

        span {
          color: var(--button-color);
        }
      }

      #subscribe {
        font-size: 14px;
        font-weight: 400;
        font-family: var(--font-barlow);
        color: var(--gray-1);
        width: 260px;
        height: 34px;
        margin-bottom: 32px;
        text-align: center;
        cursor: default;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 192px;
        width: 266px;

        input {
          width: 100%;
          height: 56px;
          border: 1px solid var(--dark-3);
          color: var(--gray-1);
          font-size: 12px;
          font-weight: 500;
          font-family: var(--font-barlow);
          line-height: 14px;
          background: none;
          border-radius: 4px;
          padding: 21px 16px;
          cursor: pointer;
          transition: 0.2s;

          &:hover {
            background-color: var(--dark-2);
          }

          &::placeholder {
            color: var(--gray-1);
          }
        }

        #name {
          margin-bottom: 16px;
        }

        #email {
          margin-bottom: 24px;
        }

        button {
          color: var(--black-1);
          width: 138px;
          height: 40px;
          background-color: var(--button-color);
          border: none;
          cursor: pointer;
          transition: 0.2s;
          font-size: 14px;
          font-weight: 700;
          font-family: var(--font-barlow);
          letter-spacing: 0.08em;
          line-height: 20px;
          border-radius: 4px;

          &:hover {
            background-color: var(--button-color-hover);
          }
        }
      }
    }
  }

  .informations {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 88px;
    padding: 32px 56px;

    p {
      color: #ffffff;
      font-family: var(--font-barlow);
      font-size: 16px;
      font-weight: 300;
      font-style: normal;
      cursor: default;
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 202px;

      #wicomm {
        img {
          width: 96px;
          height: 24px;
        }
      }

      #vtex {
        img {
          width: 66px;
          height: 24px;
        }
      }
    }
  }
`
