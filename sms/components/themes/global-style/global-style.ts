import { createGlobalStyle } from 'styled-components';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyle: any = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    padding: 0px !important;
    height: 100%;
    width: 100%;
    #root {
      height: 100%;
      width: 100%;
    }
    .ant-notification {
      color: ${({ theme }) => theme.mode.alert.textColor};
      font-size: ${({ theme }) => theme.layout.alert.fontSize};
      line-height: normal;
      margin-right: ${({ theme }) => theme.layout.margin.sm};
      margin-bottom: ${({ theme }) => theme.layout.margin.sm};
      > span {
        display: flex;
        background-color: #fff;
        .ant-notification-notice {
          border-radius: 0;
          padding: ${({ theme }) => theme.layout.padding.sm};
          line-height: normal;
          margin-bottom: 0px;
          .ant-notification-notice-content {
            .ant-notification-notice-with-icon {
              .ant-notification-notice-icon {
                position: absolute;
                margin-left: 0;
                font-size: 24px;
                line-height: 24px;
                &.ant-notification-notice-icon-success {
                  color: ${({ theme }) => theme.mode.alert.successBorderColor};
                }
                &.ant-notification-notice-icon-info {
                  color: ${({ theme }) => theme.mode.alert.infoBorderColor};
                }
                &.ant-notification-notice-icon-warning {
                  color: ${({ theme }) => theme.mode.alert.warningBorderColor};
                }
                &.ant-notification-notice-icon-error {
                  color: ${({ theme }) => theme.mode.alert.errorBorderColor};
                }
              }
              .ant-notification-notice-message {
                margin-left: 36px;
                font-family: "Roboto",sans-serif;
                font-size: 16px;
                font-weight: 500;
                color: ${({ theme }) => theme.mode.alert.textColor};
                padding-right: 16px;
              }
              .ant-notification-notice-description {
                margin-left: 36px;
                font-family: "Roboto",sans-serif;
                font-size: 14px;
                font-weight: 400;
                color: ${({ theme }) => theme.mode.alert.textColor};
              }
            }
          }
          .ant-notification-notice-close {
            position: absolute;
            top: 16px;
            right: 16px;
            outline: none;
            .ant-notification-close-icon {
              font-size: 14px;
              cursor: pointer;
              svg {
                  display: none;
              }
              &::before {
                content: "";
                font-family: "IconFont";
                color: ${({ theme }) => theme.mode.alert.textColor};
                font-size: 14px;
                font-weight: 900;
                display: block;
                text-rendering: optimizeLegibility;
              }
            }
          }
          &.error {
            border: 0px;
            border-left: 4px solid ${({ theme }) => theme.mode.alert.errorBorderColor};
            background-color: ${({ theme }) => theme.mode.alert.errorBgColor};
            .ant-notification-notice-content {
              .ant-notification-notice-with-icon {
              }
            }
          }
          &.sucess {
            border: 0px;
            border-left: 4px solid ${({ theme }) => theme.mode.alert.successBorderColor};
            background-color: ${({ theme }) => theme.mode.alert.successBgColor};
            .ant-notification-notice-content {
              .ant-notification-notice-with-icon {
              }
            }
          }
          &.info {
            border: 0px;
            border-left: 4px solid ${({ theme }) => theme.mode.alert.infoBorderColor};
            background-color: ${({ theme }) => theme.mode.alert.infoBgColor};
            .ant-notification-notice-content {
              .ant-notification-notice-with-icon {

              }
            }
          }
          &.warning {
            border: 0px;
            border-left: 4px solid ${({ theme }) => theme.mode.alert.warningBorderColor};
            background-color: ${({ theme }) => theme.mode.alert.warningBgColor};
            .ant-notification-notice-content {
              .ant-notification-notice-with-icon {

              }
            }
          }
        }
      }
    }
  }
`;

export default GlobalStyle;
