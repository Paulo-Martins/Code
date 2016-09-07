#!/bin/bash
echo "****************************************"
echo "Grading starting at" `date`;
echo "****************************************"
echo ""
echo "Introduza idade :"
read IDADE
echo "A sua idade daqui a 5 anos sera `expr $IDADE + 5`"
echo "${LINECHAR:=**********************************************************}"
echo "$LINECHAR"
MYNAME="PAULO Martins"
echo $MYNAME
echo "$LINECHAR"
WEEKDAYS=("Segunda-feira" "Terca-feira" "Quarta-feira" "Quinta-feira" "Sexta-feira")
for I in ${WEEKDAYS[@]}; do
  echo "*** $I"
done
