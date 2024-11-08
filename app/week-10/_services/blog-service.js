import {addDoc, collection, doc, getDoc, getDocs, query} from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function dbAddBlogPosts(userId, blogPostObj) {
  try {
    const newBlogPostReference = collection(db, "users", userId, "blog-posts");
    const newBlogPostPromise = await addDoc(newBlogPostReference, blogPostObj);
    console.log(newBlogPostPromise.id);
  } catch (error) {
    console.log(error);
  }
}

export async function dbGetAllBlogPostsByUser(userId, blogPostListStateSetter) {
  try {
    const allBlogPostsReference = collection(db, "users", userId, "blog-posts");
    const allBlogPostsQuery = query(allBlogPostsReference);
    const querySnapshotArray = await getDocs(allBlogPostsQuery);
    let blogPostArray = [];
    querySnapshotArray.forEach( (docSnap) => {
      let thisPost = {
        id: docSnap.id,
        ...docSnap.data()
      }
      blogPostArray.push(thisPost);
    } );
    // return blogPostArray;
    blogPostListStateSetter(blogPostArray);
  } catch (error) {
    console.log(error);
  }
}

export async function dbGetBlogPost(userId, postId, blogPostStateSetter) {
  try{
    const blogPostRef = doc(db, "users", userId, "blog-posts", postId);
    const documentSnapshot = await getDoc(blogPostRef);
    if ( documentSnapshot.exists() ) {
      blogPostStateSetter( documentSnapshot.data()) ;
    } else {
      console.log("This post does not exist in the database.");
    }
  } catch (error) {
    console.log(error);
  }
}