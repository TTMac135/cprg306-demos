"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"
import { useEffect, useState } from "react";
import { dbGetAllBlogPostsByUser } from "./_services/blog-service";

export default function SignInPage() {

  const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } 
    catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [blogPostList, setBlogPostList] = useState([]);
  useEffect( () => {
    if (user) {
      dbGetAllBlogPostsByUser(user.uid, setBlogPostList);
    }
  }, [user] );

  // console.dir(user);

  return (
    <main className="m-5">
      <header>
        <h1 className="text-center text-3xl">Firebase Authentication</h1>
      </header>
      { user ? (
        <div>
          <p>Welcome {user.displayName}!</p>
          <p>{user.Email}</p>
          <div>
            <img src={user.photoURL} className="w-10 h-10"></img>
          </div>
          <Link href="/week-10/add-blog-post">Add a new blog post!</Link>
            <section>
              <h2>My Blog Posts</h2>
              <ul>
                {
                  blogPostList.map( (post) => {
                    let postUrl = `/week-10/${post.id}`;
                    return ( <li key={post.id}><Link href={postUrl}></Link></li> )
                  } )
                }
              </ul>
            </section>

          <div>
            <button
              type="button"
              className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
              onClick={handleSignOut}
              >Sign Out</button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex-col ">
          <div><Link href="/week-9/protected">Protected Page</Link></div>
          <div>
            <button
              type="button"
              className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
              onClick={handleSignIn}
            >Sign In With GitHub
            </button>     
         </div>
        </div>
      )}
      
    </main>
  )
}
