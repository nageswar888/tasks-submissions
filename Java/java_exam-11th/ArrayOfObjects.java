package oopconcepts;
import java.util.Scanner;
class Student {
	String name;
	int rollNo;
	int marks;
	
	void setDetails(String nam,int rollN,int mark ){
		name = nam;
		rollNo = rollN;
		marks = mark;
	}
	void getDetails(){
		System.out.println("Student name is :"+ name);
		System.out.println("Student roll number is :"+ rollNo);
		System.out.println("Student marks are :"+ marks);
	}
}
public class ArrayOfObjects {
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		Student s[] = new Student[5];
		System.out.println("enter your choice");
		int choice = in.nextInt();
		switch(choice)
		{
		case 1:
			s[0]= new Student();
			s[0].setDetails("Nageswar",23,90);
			s[0].getDetails();
			break;
		case 2:
			s[1]= new Student();
			s[1].setDetails("Sai",24,90);
			s[1].getDetails();
			break;
		case 3:
			s[2]= new Student();
			s[2].setDetails("Praveen",25,91);
			s[2].getDetails();
			break;
		case 4:
			s[3]= new Student();
			s[3].setDetails("Vamshi",26,91);
			s[3].getDetails();
			break;
		case 5:
			s[4]= new Student();
			s[4].setDetails("Hemanth",27,88);
			s[4].getDetails();
			break;
		default:
			System.out.print("Student record not found");
		}
	
		in.close();
	}
}
