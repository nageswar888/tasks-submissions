package files_exceptionhandling;

import java.io.IOException;  
class ThrowsEx2{  
  void m()throws IOException{  
    throw new IOException("device error");//checked exception  
	//  System.out.println("hello");
  }  
  void n()throws IOException{  
    m();  
  }  
  void p(){  
   try{  
    n();  
   }catch(Exception e){System.out.println("exception handled");}  
  }  
  public static void main(String args[]){  
	  ThrowsEx2 obj=new ThrowsEx2();  
   obj.p();  
   System.out.println("normal flow...");  
  }  
}  

