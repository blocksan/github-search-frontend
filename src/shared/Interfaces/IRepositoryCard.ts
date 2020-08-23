import { IBaseUser } from ".";

/**
 * Interface to define the props for the Repository Card
 */
export interface IRepositoryCardProps extends IBaseUser{
    /**
     * Repository name
     */
    repoName: string;
    /**
     * Repository url
     */
    repoUrl: string;
    /**
     * Repository description
     */
    repoDescription: string;
    /**
     * Stars count on the repository
     */
    stars: number;
    /**
     * Forks count on the repository
     */
    forks: number;
    /**
     * Archive status of the repository
     */
    archived: boolean;
    /**
     * Private | Public status of the repository
     */
    isPrivate: boolean;
    /**
     * Repository creation date
     */
    createdOn: string;
}