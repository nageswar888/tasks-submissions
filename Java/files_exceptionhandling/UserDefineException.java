package files_exceptionhandling;

//used to explicitly throw exception
//this is also a user defined exception
public class UserDefineException extends Exception{
	UserDefineException(String str){ 
		super(str); //calling the constructor of its parent class( ie Exception)
		}
	public static void main(String args[]){
		try{
		 	int a=15;
			if(a>14){
				UserDefineException t = new UserDefineException("a is greater than 14");
				throw t;
			}
		}
		catch(UserDefineException e){
			e.printStackTrace();
		}
	}

}
