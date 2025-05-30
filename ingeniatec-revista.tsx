import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Search, Download, ExternalLink, Mail, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-sky-100 border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end space-x-4 text-sm">
            <Link href="#" className="text-slate-700 hover:text-sky-600">
              Registrarse
            </Link>
            <Link href="#" className="text-slate-700 hover:text-sky-600">
              Entrar
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <h1 className="text-4xl font-bold text-black">Ingenia</h1>
                <h1 className="text-4xl font-bold text-black">TEC</h1>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <nav className="flex items-center justify-center space-x-8 mb-4">
            <Link href="#" className="text-slate-700 hover:text-sky-600 font-medium">
              Actual
            </Link>
            <Link href="#" className="text-slate-700 hover:text-sky-600 font-medium">
              Archivos
            </Link>
            <div className="flex items-center space-x-1">
              <Link href="#" className="text-slate-700 hover:text-sky-600 font-medium">
                Acerca de
              </Link>
              <ChevronDown className="w-4 h-4 text-slate-700" />
            </div>
            <div className="flex items-center space-x-1">
              <Link href="#" className="text-slate-700 hover:text-sky-600 font-medium">
                Instrucciones
              </Link>
              <ChevronDown className="w-4 h-4 text-slate-700" />
            </div>
          </nav>

          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="bg-white">
              <Search className="w-4 h-4 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Logo Section */}
            <div className="text-center mb-12 bg-gray-50 py-16 rounded-lg">
              <div className="mb-8">
                <h2 className="text-6xl font-bold text-black mb-4">IngeniaTEC</h2>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Sobre la revista</h3>
              <div className="prose max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Esta revista busca convertirse en un espacio de divulgación científica y técnica, con el objetivo de
                  fomentar la divulgación del conocimiento, innovación y avances en diversas áreas de la ciencia y la
                  tecnología.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  IngeniaTEC es una publicación científica de la Universidad Mayor, Real y Pontificia de San Francisco
                  Xavier de Chuquisaca, que tiene como misión promover la investigación y el desarrollo tecnológico en
                  el ámbito académico y profesional.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  La revista acepta artículos originales de investigación, artículos de revisión, comunicaciones cortas
                  y casos de estudio en las áreas de ingeniería, tecnología, ciencias exactas y aplicadas.
                </p>
              </div>
            </div>

            {/* Latest Articles */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Últimos Artículos</h3>
              <div className="space-y-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                        Ingeniería Civil
                      </Badge>
                      <span className="text-sm text-slate-500">Vol. 8, No. 2 (2024)</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      Análisis de Resistencia de Materiales Compuestos en Estructuras de Concreto Armado
                    </CardTitle>
                    <CardDescription>Dr. Carlos Mendoza, Ing. María Fernández</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Estudio experimental sobre el comportamiento mecánico de materiales compuestos aplicados en el
                      reforzamiento de estructuras de concreto armado en condiciones sísmicas...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Leer Artículo
                      </Button>
                      <div className="flex items-center text-sm text-slate-500">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        Ingeniería de Sistemas
                      </Badge>
                      <span className="text-sm text-slate-500">Vol. 8, No. 2 (2024)</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      Implementación de Algoritmos de Machine Learning para Optimización de Procesos Industriales
                    </CardTitle>
                    <CardDescription>Ing. Roberto Silva, Dr. Ana López</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Desarrollo e implementación de algoritmos de aprendizaje automático para la optimización de
                      procesos de manufactura en la industria textil boliviana...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Leer Artículo
                      </Button>
                      <div className="flex items-center text-sm text-slate-500">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Ingeniería Ambiental
                      </Badge>
                      <span className="text-sm text-slate-500">Vol. 8, No. 1 (2024)</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      Tratamiento de Aguas Residuales Mediante Tecnologías Sostenibles en Comunidades Rurales
                    </CardTitle>
                    <CardDescription>Dra. Patricia Vargas, Ing. Luis Morales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Evaluación de sistemas de tratamiento de aguas residuales basados en tecnologías verdes para su
                      aplicación en comunidades rurales del altiplano boliviano...
                    </p>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Leer Artículo
                      </Button>
                      <div className="flex items-center text-sm text-slate-500">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Crossref Logo */}
            <div className="mb-8 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="text-2xl font-bold text-slate-700 mb-2">Crossref</div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 rounded"></div>
                </div>
              </div>
            </div>

            {/* Submit Article */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">Enviar un artículo</Button>
              </CardContent>
            </Card>

            {/* Information */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Información</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sky-600 hover:text-sky-800 text-sm">
                      Para lectores/as
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sky-600 hover:text-sky-800 text-sm">
                      Para autores/as
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sky-600 hover:text-sky-800 text-sm">
                      Para bibliotecarios/as
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Language */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Idioma</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sky-600 hover:text-sky-800 text-sm">
                      Español (España)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sky-600 hover:text-sky-800 text-sm">
                      English
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* University Logo */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full flex items-center justify-center border-4 border-yellow-400">
                <div className="text-center">
                  <div className="text-xs font-bold text-slate-700 mb-1">USFX</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-yellow-500 to-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs font-bold">ESCUDO</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">IngeniaTEC</h4>
              <p className="text-slate-600 text-sm mb-4">
                Revista científica de la Universidad San Francisco Xavier de Chuquisaca dedicada a la divulgación de
                investigación en ingeniería y tecnología.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Enlaces</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-slate-600 hover:text-sky-600">
                    Política Editorial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-sky-600">
                    Proceso de Revisión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-sky-600">
                    Ética de Publicación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-sky-600">
                    Acceso Abierto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Contacto</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span className="text-slate-600">ingeniatec@usfx.bo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span className="text-slate-600">Sucre, Bolivia</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-slate-600">
            <p>&copy; 2025 Universidad San Francisco Xavier de Chuquisaca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
