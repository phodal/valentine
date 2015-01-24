#include <IRremote.h>

int starPort = 12;
IRsend irsend;

void setup() {             
  Serial.begin(9600);  
  pinMode(starPort, OUTPUT);     
}

int serialData;
void loop() {
  String inString = "";
  while (Serial.available()> 0)
  {
    int inChar = Serial.read();
    if (isDigit(inChar)) {
      inString += (char)inChar; 
    }
    serialData=inString.toInt();
    Serial.print(serialData);
  }
  if(serialData == 1){
    digitalWrite(starPort, HIGH);   
  } else 
  if( serialData == 2){
    irsend.sendNEC(0xFF906F,32); // Sony TV power code
    delay(1000);
  }
}
