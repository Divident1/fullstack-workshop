#!/opt/homebrew/bin/bash

age=18
#this is number comparison
if [ $age -ge 18 ]; then #Points to remember always use space inside the [ content ] and space after if and elif
    echo "You are eligible to vote."
elif [ $age -ge 13 ]; then
    echo " You are ready to give vote after 5 year"
else
    echo "you are not eligible to vote"

fi