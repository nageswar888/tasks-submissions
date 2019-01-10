package oopconcepts;

abstract class Anonymous{
	abstract void add();
	abstract void substact();
}
public class AnonymousClass {
	public static void main(String args[]){
		Anonymous as = new Anonymous(){
			void add(){
				System.out.println("adding method");
			}
			void substact(){
				System.out.println("substraction method");
			}
		};
		as.add();
		as.substact();
	}

}
