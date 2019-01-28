package test;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class StudentMarks {

	public static void main(String[] args) {

        String csvFile = "/home/sk-18/Desktop/student.csv";
        String line = "";
        String csvSplitBy = ",";
        

        try {

        	 BufferedReader  bufferedReader = new BufferedReader(new FileReader(csvFile));
            while ((line = bufferedReader.readLine()) != null) {
            	int totalMarks=0;
                // use comma as separator
                String[] student = line.split(csvSplitBy);

                System.out.println(student[0]+student[1]+student[2]+student[3]+student[4]+student[5]+student[6]+student[7]+student[8]);
                totalMarks = (Integer.parseInt(student[3]+student[4]+student[5]+student[6]+student[7]+student[8]));
                double average = (totalMarks)/6;
                System.out.println("average is" + average);
                double percentage = (totalMarks/600)*100;
                System.out.println("percentage is" +  percentage);
                student[9]= " "+average;
                student[10] = " "+percentage;
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } 
            

	}

}
