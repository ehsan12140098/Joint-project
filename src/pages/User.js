import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { SearchContext } from "../Contexts/SearchContext";
import { Spinner } from "../Components/Delete/Spinner";
import { styled } from "styled-components";
import {
  COLUMN_ALIGN_START__JUSTIFY_CENTER,
  COLUMN_CENTER,
  ROW_CENTER,
  COLUMN_ALIGN_START__SPACE_B,
  ROW_JUSTIFY_START__ALIGN_CENTER,
} from "../styles/FlexStyles";
import {
  LARGE_TEXT_BOLD,
  MAIN_TEXT_BOLD,
  MAIN_TEXT_REGULAR,
  MEDIUM_TEXT_REGULAR,
  SMALL_TEXT_REGULAR,
} from "../styles/globalTypography";
import { GreenCheckedIcon } from "../Assets/Svgs/greenChecked";
import { NotAvailableIcon } from "../Assets/Svgs/notAvailable";
import BaseButton from "../Components/Delete/BaseButton";

export const User = () => {
  const { userName } = useParams();
  // const { isLoading, setIsLoading } = useContext(SearchContext);
  const navigate = useNavigate();

  const [fetchedUserData, setFetchedUserData] = useState();
  const [repos, setRepos] = useState();

  const fetchUserData = async () => {
    try {
      // setIsLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      // console.log({ data });
      setFetchedUserData(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  const fetchRepos = async () => {
    try {
      // setIsLoading(true);
      const { data } = await axios.get(
        `${fetchedUserData?.repos_url}?per_page=5&sort=created:asc`
      );

      setRepos(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    fetchedUserData?.repos_url && fetchRepos();
  }, [JSON.stringify(fetchedUserData)]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const haandleGottoGithubUserLink = () => {
    window.location.href = fetchedUserData?.html_url;
  };

  const handleSelectRepo = (link) => {
    window.location.href = link;
  };
  return (
    <div></div>
    // <>
    //   {isLoading ? (
    //     <SpinnerContainer>
    //       <Spinner />
    //     </SpinnerContainer>
    //   ) : (
    //     <Container>
    //       <TopContainer>
    //         <BackContainer onClick={handleGoBack}>Back To Search</BackContainer>
    //         <HirableContainer>
    //           <p> hirable:</p>
    //           {fetchedUserData?.hirable ? (
    //             <GreenCheckedIcon />
    //           ) : (
    //             <NotAvailableIcon />
    //           )}
    //         </HirableContainer>
    //       </TopContainer>
    //       <PrimaryContainer>
    //         <LogoHolder>
    //           <Avatar src={fetchedUserData?.avatar_url} />
    //           <NameContainer>{fetchedUserData?.name}</NameContainer>
    //           <LocationContainer>{fetchedUserData?.location}</LocationContainer>
    //         </LogoHolder>
    //         <BioHolder>
    //           {fetchedUserData?.bio && <BioText>Bio:</BioText>}
    //           <BioContainer>{fetchedUserData?.bio}</BioContainer>
    //           <Button
    //             onClick={haandleGottoGithubUserLink}
    //             title=" Visit Github Page"
    //             variant="primary"
    //           />

    //           <LoginContainer>Login:{fetchedUserData?.login}</LoginContainer>
    //           {fetchedUserData?.blog && (
    //             <WebsiteContainer>
    //               Website:{fetchedUserData?.blog}
    //             </WebsiteContainer>
    //           )}
    //         </BioHolder>
    //       </PrimaryContainer>
    //       <SecondaryContainer>
    //         <FollowerContainer>
    //           Followers:{fetchedUserData?.followers}
    //         </FollowerContainer>
    //         <FollowingContainer>
    //           Following:{fetchedUserData?.following}
    //         </FollowingContainer>
    //         <PublicReposContainer>
    //           Public Repos:{fetchedUserData?.public_repos}
    //         </PublicReposContainer>
    //         <PublicGistsContainer>
    //           Public Gists:{fetchedUserData?.public_gists}
    //         </PublicGistsContainer>
    //       </SecondaryContainer>
    //       <TertiaryContainer>
    //         {repos &&
    //           repos?.map(repo => {
    //             return (
    //               <AnchorContainer
    //                 key={repo.id}
    //                 onClick={() => handleSelectRepo(repo.html_url)}
    //               >
    //                 {repo?.name}
    //               </AnchorContainer>
    //             );
    //           })}
    //       </TertiaryContainer>
    //     </Container>
    //   )}
    // </>
  );
};

const Container = styled.div`
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
`;
const TopContainer = styled.div`
  ${ROW_JUSTIFY_START__ALIGN_CENTER}
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  ${ROW_CENTER}
`;

const BackContainer = styled.p`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  display: inline-block;
  padding: 12px 24px;
  cursor: pointer;
`;
const HirableContainer = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  padding: 12px 24px;
  ${ROW_CENTER}
  gap: 4px;
`;

const PrimaryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.chineseSilver};
  padding: 1rem;
  margin: 0.7rem 0;
`;

const LogoHolder = styled.div`
  ${COLUMN_CENTER}
  gap: 8px;
`;
const BioHolder = styled.div`
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
  gap: 16px;
`;

const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const NameContainer = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;
const LocationContainer = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;
const BioText = styled.h3`
  ${LARGE_TEXT_BOLD}
`;
const BioContainer = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;
const Button = styled(BaseButton)`
  padding: 5px 16px;
`;

const LoginContainer = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;
const WebsiteContainer = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

const SecondaryContainer = styled.div`
  ${ROW_CENTER}
  gap:0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.chineseSilver};
  padding: 1rem;
  margin: 0.7rem 0;
  width: 100%;
`;

const Statistic = styled.div`
  ${SMALL_TEXT_REGULAR}
  padding: 0.3rem 1rem;
  border-radius: 5px;
`;

const FollowerContainer = styled(Statistic)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
const FollowingContainer = styled(Statistic)`
  background-color: ${({ theme }) => theme.colors.chineseSilver};
  color: ${({ theme }) => theme.colors.dark};
`;
const PublicReposContainer = styled(Statistic)`
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
`;
const PublicGistsContainer = styled(Statistic)`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;
const TertiaryContainer = styled.div`
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
  gap: 8px;
  padding: 1rem;
  width: 100%;
`;
const AnchorContainer = styled.a`
  ${MAIN_TEXT_BOLD}
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px dotted ${({ theme }) => theme.colors.chineseSilver};
  width: 100%;
  padding: 16px;
  cursor: pointer;
`;
