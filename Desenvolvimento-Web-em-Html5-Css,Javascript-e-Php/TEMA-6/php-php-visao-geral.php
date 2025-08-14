<?php

$var1 = 10;
$Var1 = 100;
$_var1 = 200;

$var3 = "Texto";
$var3 = 'Texto';

// Operadores aritméticos

$var2 = 11;
$var3 = 2;

$modulo = $var % $var2;
// retornar o resto da divisão
echo "resultado do módulo: ". $modulo;

$var2 = 10;
$var3 = 2;

$exponencial = $var1 ** $var2;
// $var2 elevada a $var3
echo "resultado do exponencial: ". $exponencial;


// Operadores de Atribuição

$var4 = 5;

echo "1. var4: $var4";

echo "\n\n";

$var4 += 15;
echo "2. var4: $var4";
die;
echo "\n\n";

$var5 = 50;
$var5 *= 10;
echo "var5: $var5";

echo "\n\n";
die;


// Operadores de Compração

// == ; === ; != ; !==

// < ; > ; <= ; >=


// Operadores Lógicos 

// and or && ||