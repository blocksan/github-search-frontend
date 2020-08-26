import * as React from "react";
/**
 * Interface to define the props for the User Card
 */
export interface IUserCardProps  extends IBaseUser{
     /*
    *Bio of the user
    */
    bio: string;
     /*
    *Repository count of the user
    */
    repoCount: number;
     /*
    *Number of followers for the user
    */
    followersCount: number;
     /*
    *Blog link of the user
    */
    blog: string;
     /*
    *Joining date of the user
    */
    joinedOn: string;

    /**
     * Location of the user
     */
    location: string;

    ref: any
}

export interface IBaseUser {
 /*
    *Name of the user
    */
   name: string;
   /*
  *Profile link of the user
  */
  html_url: string;
   /*
  *Profile pic url of the user
  */
  avatar_url: string;

  /**
   * Login id of the user
   */
  login: string;
}