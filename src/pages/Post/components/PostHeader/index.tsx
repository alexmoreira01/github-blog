import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../Blog";
import { Spinner } from "../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1) // Voltar uma rota atras
  }

  const formattedData = relativeDateFormatter(postData?.created_at);

  console.log("LOADING ___________________________2 =>", isLoading)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
       ) : (
        <>
          <header>
            <ExternalLink
              // as="button"
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text='Voltar'
              onClick={handleGoBack}
              variant="iconLeft"
            />
            <ExternalLink text='Ver no Github' href={postData.html_url} target="_blank" />
          </header>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>

            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedData}
            </li>

            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
       )
      }
    </PostHeaderContainer>
  )
}