import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
  }
  header.header, .modal-content{
    background-color: ${({ theme }) => theme.header}!important;
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
  }
  .indicator{
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
    box-shadow: ${({ theme }) => theme.shadow};
  }
  .indicator__title{
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
    
  }
  .main__top .main__title h3{
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
  }
  header.header .container .header__content .header__profile .header__user .user__name{
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
  }
  .dropdown-body.open{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
  }
  .main-btn-2{
    color: ${({ theme }) => theme.btn2TextColor};
    transition: all 0.50s linear!important;
  }
  .main-btn-2:hover{
    color: ${({ theme }) => theme.btnHoverColor};
    transition: all 0.50s linear!important;
  }
  .students-chart{
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.shadow};
    transition: all 0.50s linear!important;    
  }
  .students-chart .chart__title{
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
  }
  .students-chart hr{
    border: ${({ theme }) => theme.hrBorderColor};
    transition: all 0.50s linear!important;
  }
  hr{
    border: ${({ theme }) => theme.hrBorderColor};
    background-color:  ${({ theme }) => theme.hrBgColor};
    transition: all 0.50s linear!important;
  }
  .sidebar{
    background-color:  ${({ theme }) => theme.sidebarBg}!important;
    transition: all 0.50s linear!important;
  }
  .students-card, .students-type{
    background-color:  ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.shadow};
    transition: all 0.50s linear!important;
  }
  .students-card__top .students-card__title, .students-type__top .students-type__title, .students-item .item__mark, .list-item .item__numbers{
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
  }
  .card{
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear!important;
    box-shadow: ${({ theme }) => theme.shadow};
  }
  .users-container{
    background: ${({ theme }) => theme.header};
    border-radius: 10px;
    transition: all 0.50s linear!important;
  }
  .user{
    border-bottom: ${({ theme }) => theme.hrBorderColor};
    transition: all 0.50s linear!important;
  }
  .user::after{
    display: none;
    transition: all 0.50s linear!important;
  }
  `
