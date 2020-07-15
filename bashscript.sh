#!/bin/bash
NUMBERS="2 41 -15"

sum=0
for NUM in ${NUMBERS}
do    
    
    ((counter++))
    (( sum += ${NUM#-}))
  
done
if ['$sum' -gt '10^18']
  then
     echo "Error"
else
     echo $sum
fi



