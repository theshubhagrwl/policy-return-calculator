p = int(input("Enter premium amount "))
#print("Premium is :", p)

pYrs = int(input("Enter number of years you paid premium "))
#print("yrs :", pYrs)

interest = float(input("Enter approx yearly interest: "))

t1=float(p)

for i in range(pYrs):
    t1 += ((interest/100) * t1)
    if i!=pYrs-1:
        t1+=p

print("with {}% interest, your money after {} yrs will be {}".format(interest,pYrs,round(t1,2)))

unpYrs = int(input("Enter the years you haven't paid anything "))

for i in range(unpYrs):
    t1+=((interest/100) * t1)


print("Your total income at {}% interest for total of {}yrs will be:{} ".format(interest, (pYrs+unpYrs), round(t1,2)))
