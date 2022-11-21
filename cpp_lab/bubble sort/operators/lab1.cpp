#include <stdio.h>
#include <math.h>

int main() {
    float a, b, n;
    printf("Vvedite znachenie a i b: ");
    scanf("%f%f", &a, &b);
    if (a != b)
    {
        n = a + b;
        printf("a i b bili neravni: %.0f", n);
        printf("\n a = %.0f", n);
        printf("\n b = %.0f", n);
    }
    else
    {
        a = 0;
        b = 0;
        printf("\n a i b bili ravni:");
        printf("\n a = %.0f", a);
        printf("\n b = %.0f", b);
    }

    return 0;
}
