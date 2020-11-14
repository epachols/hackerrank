# Regex Patterns that are useful

Alpha-numeric input limiter basic.

    /^[a-z0-9]+$/i
    
    ^         Start of string
    [a-z0-9]  a or b or c or ... z or 0 or 1 or ... 9
    +         one or more times (change to * to allow empty string)
    $         end of string    
    /i        case-insensitive

The word character class below

    ^\w+$

    is equivalent to

    ^[a-zA-Z0-9_]+$
