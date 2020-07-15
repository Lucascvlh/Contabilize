package Incca.usuario;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tb_usuario_transacao")
public class UsuarioEntity implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id_nome;
	@Column(name="nome")
	private String nome;
	@Column(name="email")
	private String email;
	@Column(name="senha")
	private String senha;
	@Column(name="nome_transacao")
	private String nome_transacao;
	@Column(name="tipo_receita")
	private String tipo_receita;
	@Column(name="valor")
	private float valor;
	
	public String getNome_transacao() {
		return nome_transacao;
	}
	public void setNome_transacao(String nome_transacao) {
		this.nome_transacao = nome_transacao;
	}
	public String getTipo_receita() {
		return tipo_receita;
	}
	public void setTipo_receita(String tipo_receita) {
		this.tipo_receita = tipo_receita;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	public UsuarioEntity() {
		
	}
	public Long getId_nome() {
		return id_nome;
	}
	public void setId_nome(Long id_nome) {
		this.id_nome = id_nome;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	@Override
	public String toString() {
		return "UsuarioEntity [id_nome=" + id_nome + ", nome=" + nome + ", email=" + email + ", senha=" + senha
				+ ", nome_transacao=" + nome_transacao + ", tipo_receita=" + tipo_receita + ", valor=" + valor + "]";
	}
	
	
	
	
}
