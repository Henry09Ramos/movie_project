import { useState, useEffect } from 'react';
import { get_user, create_user, delete_user,update_user} from '../services/user.services';
import { ICreateUser, IGetUsers} from '../types/user.types';


const UseUserStore = () => {
    const [users, setUser] = useState<IGetUsers[]>([]);

    useEffect(() => {
      GetUsers();
    }, []);

    const GetUsers = async ()=>{

      try {
        const data =await get_user()
        setUser(data.users)
      } catch (error) {
        return{}
        
      }
    }

  
    const onCreateUser = async (user:ICreateUser) => {
      try {
        const data = await create_user(user)
        if(data.ok){
          await GetUsers()
        }
        
      } catch (error) {
        return({})
      }
    };

    const DeleteUser = async (id: number) => {
        try {
            const data = await delete_user(id);

            if (data.ok) {
                  await GetUsers()
            }
        } catch(error) {
            return({})
        }
    };

    const UpdateUser = async (id: number,name:string,email:string,password:string) => {
        try {
            const data = await update_user(id,name,email,password);

            if (data.ok) {

                await GetUsers();
            }
        } catch (error) {
            return({})
        }
    };
    return {
        users,
        GetUsers,
        onCreateUser,
        DeleteUser,
        UpdateUser,
    };
};

export default UseUserStore;
