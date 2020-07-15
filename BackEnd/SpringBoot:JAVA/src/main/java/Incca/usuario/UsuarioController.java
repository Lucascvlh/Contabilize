package Incca.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/usuario")
public class UsuarioController {

		@Autowired
		UsuarioRepository injecao;
		
		@PostMapping
		public UsuarioEntity addUsuario(@RequestBody UsuarioEntity usuario) {
			return injecao.save(usuario);
		}
		
		@GetMapping
		public List<UsuarioEntity> getUsuario(){
			return injecao.findAll();
		}
		
		@PutMapping
		public UsuarioEntity updateUsuario(@RequestBody UsuarioEntity usuario) {
			return injecao.save(usuario);
		}
		
		@DeleteMapping("/{id}")
		public UsuarioEntity deleteUsuario(@PathVariable Long id) {
			injecao.deleteById(id);
			return null;
		}
}
