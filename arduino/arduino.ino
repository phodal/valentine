#include <IRremote.h>

int starPort = 12;
IRsend irsend;
int fullStar = 1;
int irRemote = 2;

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
  if(serialData == fullStar){
    digitalWrite(starPort, HIGH);
  } else
  if( serialData == irRemote){
    irsend.sendNEC(0xFF906F,32); // Sony TV power code
    delay(1000);
  }
}
