import { IRepositoryCardProps, IUserCardProps, IUserTypeContent, IRespositoryTypeContent } from "../../shared/Interfaces"

export const __UserContents = [
    { 
        avatar_url: "https://avatars1.githubusercontent.com/u/8601323?v=4", 
        html_url: "", 
        detailInfo: { 
            name: "sandeep", 
            bio: "Loves to hit the keyboard until something product happens !", 
            blog: "123123",
            location: "Dubai", 
            public_repos:20, 
            followers:12, 
            created_at:"12-23-2332"
        } 
    } as IUserTypeContent,


]
export const __RepositoryContents = [
    { 
        name: "sandeep-repo", 
        html_url: "afsdfsd", 
        description:"hello",
        stargazers_count:10,
        forks_count:20,
        archived: false,
        private: false,
        created_at:"12-12-20202",
        owner:{
            avatar_url: "https://avatars1.githubusercontent.com/u/8601323?v=4", 
            login:"sandeep",
            name:"sandeep",
            html_url:""
        },
    } as IRespositoryTypeContent

]