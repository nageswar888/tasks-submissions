/* 21. Consider a variable Directions of enum type, which is a collection of four constants EAST, WEST, NORTH and SOUTH.
Create a class EnumDemo and make use of enum variable. (example if you get the enum value is EAST. you should display "you are at EAST direction") 

*/
package files_exceptionhandling;

enum Direction
{
	EAST,WEST,NORTH,SOUTH
}
public class EnumDemo {

	public static void main(String[] args) {
		Direction d =Direction.EAST; //giving the enum constant EAST to its reference variable
		
		switch(d)
		{
		case EAST:
			System.out.print("you are at EAST direction");
			break;
		case WEST:
			System.out.print("you are at WEST direction");
			break;
		case NORTH:
			System.out.print("you are at NORTH direction");
			break;
		case SOUTH:
			System.out.print("you are at SOUTH direction");
			break;
		default:
			System.out.print("give a direction");
			break;
			
		}

	}

}
