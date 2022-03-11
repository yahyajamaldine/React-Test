
export const login=(user,password)=>{
    if((user&&password)){
        localStorage.setItem('user',JSON.stringify([user,password]));
        return localStorage.getItem('user');
    }
    return {};
}

export const Logout=()=>{
    localStorage.removeItem('user');
    return true;
}

export const Authenticated = () => {
	const user = localStorage.getItem('user');
	if (!user) {
		return null;
	}
	return JSON.parse(user);
};
 