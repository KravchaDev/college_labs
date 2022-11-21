#include <math.h>
#include <stdio.h>

int main() {
  float a, b, summ, razn, chast, proiz;

  printf("Vvedite pervoe i vtoroe chislo: \n");
  scanf("%f%f", &a, &b);

  summ = a + b;
  razn = a - b;
  chast = (a * a) / (b * b);
  proiz = a * b;

  printf("Summa = %.2f", summ);
  printf("\nRaznost = %.2f", razn);
  printf("\nChast = %.2f", chast);
  printf("\nProiz = %.2f", proiz);

  return 0;
}
