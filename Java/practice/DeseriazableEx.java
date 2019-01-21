package oopconcepts;

import java.io.*;
public class DeseriazableEx {
	static void details(Serialize b1)
	{
		System.out.println(b1.name);
		System.out.println(b1.marks);
		System.out.println(b1.rollno);
	}
	public static void main(String[] args) throws Exception{
		
		FileInputStream f = new FileInputStream("/home/sk-18/Desktop/files/serialize.ser");
		ObjectInputStream ob1 = new ObjectInputStream(f);
		Serialize b = (Serialize)ob1.readObject();
		Serialize b1 = (Serialize)ob1.readObject();
		Serialize b2 = (Serialize)ob1.readObject();
		details(b);
		System.out.println("\n");
		details(b1);
		System.out.println("\n");
		details(b2);
		b1.name="hareesh";
		System.out.println("\n");
		details(b1);
		
	}

}
