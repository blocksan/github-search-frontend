import {IBaseUser} from './../Interfaces'

/**
 * Defines the type for user item returned from API endpoint
 */
export type IUserTypeContent = {
    /**
     * Profile url of the user
     */
    html_url: string;

    /*
    *Avatar url of the user
    */
    avatar_url: string;

    detailInfo:{
        /**
         * Name of the user
         */
        name: string;

        /*
        *Bio of the user
        */
        bio: string;
        /*
        *Public Repository count of the user
        */
        public_repos: number;
    
        /**
         * followers count
         */
        followers: number;
    
        /**
        * Blog link of the user
        */
        blog: string;
    
        /*
        *Joining date of the user
        */
       created_at: string;

       /**
         * Location of the user
         */
        location: string;
    }

}

/**
 * Defines the type for repository item returned from API endpoint
 */
export type IRespositoryTypeContent = {

     /**
     * Repository name
     */
    name: string;
    /**
     * Repository url
     */
    html_url: string;
    /**
     * Repository description
     */
    description: string;
    /**
     * Stars count on the repository
     */
    stargazers_count: number;
    /**
     * Forks count on the repository
     */
    forks_count: number;
    /**
     * Archive status of the repository
     */
    archived: boolean;
    /**
     * Private | Public status of the repository
     */
    private: boolean;
    /**
     * Repository creation date
     */
    created_at: string;

    /**
     * owner object returned from github
     */
    owner:IBaseUser;
}

export type IContentItems = Array<IUserTypeContent|IRespositoryTypeContent>

export type IContent = {
    total_count: number,
    incomplete_results: boolean,
    items: IContentItems
    totalPages:number
}

/**
 * Default success response from API
 */
export type ISuccessResponse = {
    status: true,
    content:IContent
}

/**
 * Default failed response from API
 */
export type IFailedResponse = {
    status: false,
    error: string,
    message?: string
}