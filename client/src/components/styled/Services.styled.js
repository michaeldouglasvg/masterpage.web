import styled from 'styled-components';

export const ServicesMainStyles = styled.div`
  width: 100%;
  margin-top: .6rem;
  overflow-x: hidden;
  @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    margin-top: .8rem;
  }
  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    margin-top: .9rem;
  }

  & > .Titleheader {
    width: 60%;
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      width: 100%;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      width: 100%;
    }

   & > h1 {
    font-size: 2rem;
    color: skyblue;
    padding-left: .8rem;
    
    @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
      font-size: 2.6rem;
    }
    @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
      font-size: 3rem;
    }
   }
  }

  @media (min-width: ${({theme}) => theme.responsive.mobilemd}){

   & > .Titleheader {
    width: 100%;

    & > h1 {
     font-size: 3rem;
     color: skyblue;
     padding-left: 7rem;
    }
   }
  }
`

export const Ratings = styled.div`
 width: 100%;
 border-radius: 3px;
 /* box-shadow: ${({theme}) => theme.colors.boxshadow}; */
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  width: 100%;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  width: 100%;
 }
`

export const HappyClients = styled.div`
 width: 100%;
 height: 70vh;
 overflow-y: scroll;
 position: relative;
 &::-webkit-scrollbar{
  display: none;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  padding: 0rem .6rem;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: 0rem .8rem;
 }

 & > .Title{
  width: 100%;
  padding: 1rem .2rem;
  border-bottom: ${({theme}) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 99;
  background: ${({theme}) => theme.colors.body};

  & h1{
   font-size: 1rem;
   color: ${({theme}) => theme.colors.color};
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    font-size: 1.3rem;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    font-size: 1.6rem;
   }
  }
 }
`

export const PackageRatings = styled.div`
 width: 100%;
 padding: .6rem .2rem;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 border-left: 10px solid skyblue;
 border-radius: 5px 0 5px 0;
 margin-top: 1.5rem;

 & > .Description{
  width: 100%;
  padding-left: .4rem;

  & h2{
   font-size: .8rem;
   color: orange;
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    font-size: 1.3rem;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    font-size: 1.6rem;
   }
  }

  & p{
   margin-top: .4rem;
   color: ${({theme}) => theme.colors.color};
   line-height: 1.5rem;
   font-size: .8rem;
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    font-size: 1rem;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    font-size: 1.2rem;
   }
  }
 }

 & > .Ratting-container{
  margin-top: .4rem;
  border-top: ${({theme}) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  & p{
   color: green;
   padding-top: .2rem;
   font-size: .9rem;
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    font-size: 1rem;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    font-size: 1.2rem;
   }
  }
  & p:nth-child(2){
   color: gold;
   padding-right: 1rem;
  }
 }
`

// Services cards
export const MyServicesCard = styled.div`
 width: 100%;
 padding: .2rem .2rem;
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  padding: .6rem .6rem;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: .8rem .8rem;
 }

 & > .Title{
  width: 90%;
  padding: .6rem .2rem;
  margin-bottom: .6rem;
  border-bottom: ${({theme}) => theme.colors.border};

  & h1{
   font-size: 1rem;
   color: ${({theme}) => theme.colors.color};
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    font-size: 1.3rem;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    font-size: 1.6rem;
   }
  }
 }
`

export const SingleCardDisplay = styled.div`
 width: 100%;
 margin: 1rem auto;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 1rem .4rem;
 flex-direction: column;

 & .CardTitle{
  width: 100%;
  padding-bottom: .4rem;
  margin: .1rem auto;
  border-bottom: ${({theme}) => theme.colors.border};
  & h3{
   font-size: 1.5rem;
   color: ${({theme}) => theme.colors.color};
   text-align: center;
  }
 }

 & .CardImage{
  width: 220px;
  height: 220px;
  background: grey;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 50%;
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    width: 250px;
    height: 250px;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    width: 280px;
    height: 280px;
   }

  & img{
   width: 100%;
   height: 100%;
  }
 }

 & .CardDescription{
  margin: .2rem auto;
  width: 98%;
  padding: .2rem .2rem;
  & p{
   line-height: 1.6rem;
   color: ${({theme}) => theme.colors.color};
   text-align: center;
  }
 }

 & .CardContacts{
  margin: 2rem auto;
  width: 98%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & p{
    color: ${({theme}) => theme.colors.color};
  }
 }
`

export const AdvancedRequests = styled.div`
 width: 100%;
 padding: .2rem .2rem;
 @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
  padding: .6rem .6rem;
 }
 @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
  padding: .8rem .8rem;
 }

 & > .Title{
  width: 100%;
  padding: .6rem .2rem;
  margin-bottom: .6rem;
  border-bottom: ${({theme}) => theme.colors.border};

  & h1{
   font-size: 1rem;
   color: ${({theme}) => theme.colors.color};
   @media (min-width: ${({theme}) => theme.responsive.mobilesm}){
    font-size: 1.3rem;
   }
   @media (min-width: ${({theme}) => theme.responsive.mobilemd}){
    font-size: 1.6rem;
   }
  }
 }
`

export const SocialMediaTrends = styled.div`
 width: 100%;
 margin: 1rem auto;
 box-shadow: ${({theme}) => theme.colors.boxshadow};
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 1rem .4rem;
 flex-direction: column;

 & .MediaTrendsNavigation{
  width: 100%;
  padding-bottom: .4rem;
  border-bottom: ${({theme}) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
 }

 & .FeedDisplay{
  width: 100%;
  height: 50vh;
  margin-top: 1rem;
  overflow-y: scroll;

  & > .SingleFeed{
   width: 100%;
   padding: 1rem .3rem;
   position: relative;

   & h1{
    font-size: 1.3rem;
    color: ${({theme}) => theme.colors.color};
    padding: .6rem .1rem;
    border-bottom: ${({theme}) => theme.colors.border};
    position: sticky;
    top: 0;
    z-index: 99;
    background: ${({theme}) => theme.colors.body};
   }

   & p{
    line-height: 1.5rem;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.color};
   }
   
   & > .CommentSection{
    width: 98%;
    border-bottom: ${({theme}) => theme.colors.border};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .1rem auto;
    padding: 1rem .1rem;

    & .Form{
     display: flex;
     justify-content: flex-start;
     align-items: center;
     & p{
      width: 30px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${({theme}) => theme.colors.color};
     }

     & .Inputcomment{
      & input{
       outline: none;
       border: none;
       margin-left: 1rem;
       padding: .4rem .4rem;
      }
      & button{
       padding: .2rem .6rem;
       border: none;
       outline: none;
       text-align: center;
       background: skyblue;
       color: ${({theme}) => theme.colors.color};
       border-radius: 3px;
       cursor: pointer;
       &:hover{
        background: blue;
       }
      }
     }
    }

    & .Likes{
     margin-left: 1rem;
     width: 40px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     cursor: pointer;
     color: ${({theme}) => theme.colors.color};
    }
   }
  }
 }
`