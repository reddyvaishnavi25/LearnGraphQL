const { users, posts, comments, likes } = require('../Data');
const _ = require("lodash");

const resolvers= {
    Query:{
        getAllUsers:()=> {
            return  users;
        },

        getAllPosts:()=>{
            return posts;
        },

        getUser:(parent,args)=>{
            const name=args.name;
            const user = _.find(users, { name });
            return user;
        },

        getUsersWithFollowers:(parent, args)=>{
            const count=args.followersCount;
            return users.filter(user => user.followers.length === count);
        }
    },

    Mutation:{
        addUser:(parent,args)=>{
            const user=args.input;
            user.id= users[users.length-1].id+1;
            users.push(user);
            return user;
        },
        updateUser:(parent,args)=>{
            const {name, newBio}=args.input;
            let updatedUser;
            users.forEach((user)=> {
                if(user.name===name)
                {
                    user.bio=newBio;
                    updatedUser=user;
                }
            })
            return updatedUser;
        },
        deleteUser:(parent,args)=>{
            const id=args.id;
            _.remove(users, (user)=>user.id===id)
            return null;
        }
    }
}

module.exports={resolvers};