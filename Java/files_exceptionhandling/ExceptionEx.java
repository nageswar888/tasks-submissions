package files_exceptionhandling;

 // 1st 
public class ExceptionEx {
	public static void main(String args[]){
		try{							
			int a[]= new int[5];
			 a[7]=10;				// this statement throws an exception and it should be catch in catch block
			 System.out.println("catch"); 
		}
		catch(ArrayIndexOutOfBoundsException e){ //it catches the above exception
			System.out.print("array index is out of bounds");
		}
		
	}

}
