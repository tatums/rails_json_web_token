class JsonWebToken

  PRIVATE_KEY = OpenSSL::PKey::RSA.new File.read("#{Rails.root}/private_key.pem")
  PUBLIC_KEY = OpenSSL::PKey::RSA.new File.read("#{Rails.root}/public_key.pem")

  def self.encode(payload)
    JWT.encode payload, PRIVATE_KEY, 'RS256'
  end

  def self.decode(token)
    decoded = JWT.decode token, PUBLIC_KEY, true, { :algorithm => 'RS256' }
    return HashWithIndifferentAccess.new(decoded.first)
  rescue
    nil
  end

end
