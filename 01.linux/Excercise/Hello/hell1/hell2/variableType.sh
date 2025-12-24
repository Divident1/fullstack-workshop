#!/opt/homebrew/bin/bash

greeting="Hii"

count=10

echo "$((count+5))"

fruits=("apple" "banana" "orange")
echo "${fruits[0]}"
echo "${fruits[@]}"
echo "${#fruits[@]}"
#join them as one string
echo "${fruits[*]}"
#indexing starts from 0.
echo "${fruits[@]:1:2}"
#apple orange

#associative array means it should store array in key value pair.
#For that first i need to declare it with Declare -A name

declare -A car
car[color]=blue
car[brand]=bmw;
car[year]=2022;
echo ${car[color]} ${car[brand]} ${car[year]}


