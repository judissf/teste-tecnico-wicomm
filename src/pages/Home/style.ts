import styled from 'styled-components'

export const HomeStyle = styled.main`
  display: flex;
  /* position: relative; */
  flex-direction: column;
  max-width: 1280px;
  width: 100%;
  height: 4271px;
  background-color: white;
  margin: auto;

  .introduction {
    display: flex;
    flex-direction: column;
    height: 548px;
    width: 100%;
    padding-left: 155px;
    padding-top: 130px;
    margin-bottom: 56px;
    background-image: url('src/assets/intro.png');
    background-size: contain;
    background-size: 1280px 548px;

    #introduction-title {
      font-family: var(--font-roboto);
      color: white;
      font-weight: 700;
      font-size: 56px;
      line-height: 66px;
      font-style: italic;
      width: 551px;
      height: 132px;
      margin-bottom: 16px;
      cursor: default;
      text-transform: uppercase;

      span {
        color: var(--button-color);
      }
    }

    #introduction-description {
      width: 349px;
      height: 60px;
      color: white;
      font-family: var(--font-barlow);
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 32px;
      cursor: default;
    }

    #check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 48px;
      background-color: var(--button-color);
      border: none;
      border-radius: 4px;
      color: var(--black-1);
      font-family: var(--font-barlow);
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      text-decoration: none;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      transition: 0.2s;
      cursor: pointer;
      margin-bottom: 92px;

      &:hover {
        background-color: var(--button-color-hover);
      }
    }
  }

  .category-suplements {
    width: 100%;
    height: 210px;
    padding-left: 56px;
    padding-right: 56px;
    margin-bottom: 64px;

    .list-category-suplements {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    }
  }

  .releases {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 56px;
    padding-right: 56px;
    margin-bottom: 64px;

    #title-releases {
      font-size: 32px;
      font-family: var(--font-roboto);
      font-weight: 700;
      line-height: 38px;
      font-style: italic;
      margin-bottom: 24px;
      color: var(--dark-1);
      cursor: default;
      text-transform: uppercase;
    }

    .list-products-releases {
      display: flex;
      position: relative;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;
    }
  }

  .our-athletes {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 461px;
    background-image: url('src/assets/background_athletes.png');
    padding-top: 40px;
    margin-bottom: 88px;

    #title-our-athletes {
      position: absolute;
      left: 205px;
      font-family: var(--font-roboto);
      font-style: italic;
      font-weight: 700;
      font-size: 40px;
      line-height: 47px;
      color: white;
      height: 47px;
      margin-bottom: 24px;
      cursor: default;
      text-transform: uppercase;

      span {
        color: var(--button-color);
      }
    }

    .list-athletes {
      display: flex;
      position: absolute;
      top: 111px;
      left: 205px;
      align-items: center;
      justify-content: space-between;
      width: 871px;
    }

    #see-all {
      position: absolute;
      bottom: -24px;
      left: auto;
      right: 44.5%;
      width: 139px;
      height: 48px;
      color: var(--black-1);
      background-color: var(--button-color);
      font-family: var(--font-barlow);
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      border-radius: 4px;
      letter-spacing: 0.08em;
      border: none;
      transition: 0.2s;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        background-color: var(--button-color-hover);
      }
    }
  }

  .promotions {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 64px;

    #title-promotions {
      font-size: 32px;
      font-family: var(--font-roboto);
      font-weight: 700;
      line-height: 38px;
      font-style: italic;
      margin-bottom: 24px;
      color: var(--dark-1);
      cursor: default;
      text-transform: uppercase;
    }

    .list-products-promotions {
      display: flex;
      position: relative;
      align-items: center;
      gap: 20px;
      margin-bottom: 24px;
    }
  }

  .check-blog {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 540px;
    background: linear-gradient(180deg, #3a3a3c 0%, #0b0b0b 101.48%);
    margin-bottom: 64px;

    .container-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      padding: 41px 56px 0;

      #title-check-blog {
        font-family: var(--font-roboto);
        font-style: italic;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        color: white;
        text-transform: uppercase;

        span {
          color: var(--button-color);
        }
      }

      #read-all {
        width: 127px;
        height: 40px;
        border: none;
        background: var(--button-color);
        border-radius: 4px;
        color: var(--black-1);
        font-family: var(--font-barlow);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.08em;
        transition: 0.2s;
        cursor: pointer;
        text-transform: uppercase;

        &:hover {
          background-color: var(--button-color-hover);
        }
      }
    }

    .list-articles-blog {
      display: flex;
      position: relative;
      gap: 20px;
      padding-left: 56px;
    }
  }

  .objectives {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 402px;
    margin-bottom: 64px;

    #title-objectives {
      font-family: var(--font-roboto);
      font-style: italic;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 24px;
      color: var(--dark-1);
      cursor: default;
      text-transform: uppercase;
    }

    .list-objectives {
      display: flex;
      width: 1168px;
      height: 340px;
      gap: 20px;
    }
  }

  .freight-cashback {
    display: flex;
    align-items: center;
    height: 280px;
    width: 970px;
    gap: 20px;
    margin: 0 auto 64px auto;
  }

  .about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 643px;
    height: 278px;
    background-image: url('src/assets/background_about_us.png');
    background-position: top;
    background-repeat: no-repeat;
    margin: 0 auto 64px auto;
    padding-top: 96px;

    #title-about-us {
      font-family: var(--font-roboto);
      font-style: italic;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      color: var(--dark-1);
      cursor: default;
      margin-bottom: 24px;
      text-transform: uppercase;
    }

    #description-about-us {
      font-family: var(--font-barlow);
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
  }
`
