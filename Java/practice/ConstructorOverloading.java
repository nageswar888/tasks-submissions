package oopconcepts;

public class ConstructorOverloading {
		
		ConstructorOverloading(){
			System.out.println("1.this is a constructure without parameters");
		}
		ConstructorOverloading(int a,int b){
			System.out.println("2.this is a constructure with integers as parameters");
		}
		ConstructorOverloading(int a,char b){
			System.out.println("3.this is a constructure with integer and char as a parameters");
		}
		ConstructorOverloading(char a,int b){
			System.out.println("4.this is a constructure with char and int as a parameters");
		}
		ConstructorOverloading(int a,double b){
			System.out.println("5.this is a constructure with int and float as a parameters");
		}
		ConstructorOverloading(int a,int b,int c){
			System.out.println("6.this is a constructure with three int parameters");
		}
		public static void main(String args[]){
			ConstructorOverloading co1= new ConstructorOverloading();
			ConstructorOverloading co2= new ConstructorOverloading(2,5); 
			//if constructor with integer arguments is not present then it executes the constructor with double arguments 
			
			ConstructorOverloading co3= new ConstructorOverloading(3,'b');
			ConstructorOverloading co4= new ConstructorOverloading('a',5);
			ConstructorOverloading co5= new ConstructorOverloading(1,1.3);
			ConstructorOverloading co6= new ConstructorOverloading(6,4,9);
		}

	}



