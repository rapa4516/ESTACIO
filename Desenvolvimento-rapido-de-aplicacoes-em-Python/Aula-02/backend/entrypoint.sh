echo "Rodando o PostgreSQL"

while ! nc -z db 5432; do
    sleep 0.1
done

echo "PostgreSQL iniciado"

echo "$@"