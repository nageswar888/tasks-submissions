package oopconcepts;

abstract class Instrument
{
	String name;
	abstract void play();
	
}
abstract class StringedInstrument extends Instrument
{
	String numberOfStings;
}
class ElectronicGuiter extends StringedInstrument
{
	void play()
	{
		System.out.println(name+" is playing");
	}
}

class ElectricBassGuitar extends StringedInstrument
{
	void play()
	{
		System.out.println("Instruments are playing");
	}
}

public class Execution {	
	public static void main(String[] args) {
		Instrument eg = new ElectronicGuiter();
		Instrument ebg = new ElectricBassGuitar();
		eg.name="Guiter";
		eg.play();
		ebg.play();

	}

}
