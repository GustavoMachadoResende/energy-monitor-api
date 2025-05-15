# Caminho da pasta backend
$backendPath = ".\backend"

# Nome do arquivo zip de saída (salvo na raiz)
$zipFileName = "ac-a7-web-mobile.zip"

# Itens obrigatórios dentro de /backend
$itensParaCompactar = @(
    "src",
    "test",
    "package.json",
    "tsconfig.json",
    "nest-cli.json",
    "github.txt"
)

# Caminho completo dos itens
$itensCompletos = $itensParaCompactar | ForEach-Object { Join-Path $backendPath $_ }

# Remover ZIP existente, se houver
if (Test-Path $zipFileName) {
    Remove-Item $zipFileName
}

# Compactar os arquivos
Compress-Archive -Path $itensCompletos -DestinationPath $zipFileName

Write-Host "Compactação concluída: $zipFileName"
