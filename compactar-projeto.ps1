# Caminho da pasta backend
$backendPath = ".\backend"

# Nome do arquivo zip de saída (salvo na raiz)
$zipFileName = "ac-a7-web-mobile.zip"

# Itens obrigatórios DENTRO de /backend
$itensBackend = @(
    "src",
    "test",
    "package.json",
    "tsconfig.json",
    "nest-cli.json"
)

# Caminho completo dos itens da pasta backend
$itensBackendCompletos = $itensBackend | ForEach-Object { Join-Path $backendPath $_ }

# Caminho do github.txt (na raiz do projeto)
$githubTxt = ".\github.txt"

# Lista final de itens a serem compactados
$itensParaCompactar = $itensBackendCompletos + $githubTxt

# Remover ZIP existente, se houver
if (Test-Path $zipFileName) {
    Remove-Item $zipFileName
}

# Compactar os arquivos
Compress-Archive -Path $itensParaCompactar -DestinationPath $zipFileName

Write-Host "✅ Compactação concluída: $zipFileName"
