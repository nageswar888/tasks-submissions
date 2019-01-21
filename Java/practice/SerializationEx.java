package oopconcepts;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

 class SerializEx implements Serializable {
	int a;
	static int b;
	transient int c;
	SerializEx(int a,int b,int c){
		this.a=a;
		this.b=b;
		this.c=c;
	}
}
	public class SerializationEx{
		static void print(SerializEx s)
		{
			System.out.println("a = "+s.a);
			System.out.println("b = "+s.b);
			System.out.println("c = "+s.c);
		}
	public static void main(String[] args) throws Exception {
		 
		// ********* Serialization ************//
		SerializEx s= new SerializEx(221,62,92);
		FileOutputStream f = new FileOutputStream("/home/sk-18/Desktop/a.txt");
		ObjectOutputStream out=new ObjectOutputStream(f); 
		 out.writeObject(s);  
		 System.out.println("object before deserialization");
		 print(s);
		 System.out.println(s);
		 System.out.println("Serialization compleated\n\n"); 
		 out.close();
		 
		// ********* Deserialization ************//
		 ObjectInputStream i = new ObjectInputStream(new FileInputStream("/home/sk-18/Desktop/a.txt"));
			SerializEx s1 =(SerializEx)i.readObject();
			System.out.println("object after deserialization");
			System.out.println(s1);
			print(s1);
			System.out.println("Deserialization compleated");
			i.close();
			//System.out.println(s1.a+" "+s1.b+" "+s1.c);  
		
			
	}

}
