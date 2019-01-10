package files_exceptionhandling;

public class ThrowsEx {
	void method1() throws ArithmeticException{ // it throws an Arithmetic exception and it is handled in catch block
		throw new ArithmeticException();
	}
	void method2() throws ArithmeticException{
		method1();        //control goes to method1
	}
	void method3(){
		try{   
			method2(); //control goes to method2
		}
		catch(ArithmeticException e){
			System.out.print("Arithmetic exception");
		}
	}
		public static void main(String args[]){
			ThrowsEx t = new ThrowsEx();
			t.method3(); // calling method3 
			
		}
	}


